import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';

@Component({
    selector: 'app-ex50',
    standalone: true,
    imports: [
        CommonModule,
        BookListComponent,
        BookFormComponent,
        BookDetailsComponent,
        DeleteConfirmComponent
    ],
    templateUrl: './ex50.component.html',
    styleUrls: ['./ex50.component.css']
})
export class Ex50Component implements OnInit {
    books = signal<Book[]>([]);
    loading = signal<boolean>(false);
    currentView = signal<'list' | 'form' | 'details'>('list');
    selectedBook = signal<Book | null>(null);
    formMode = signal<'create' | 'edit'>('create');
    showDeleteConfirm = signal<boolean>(false);
    bookToDelete = signal<Book | null>(null);
    toastMessage = signal<string>('');
    showToast = signal<boolean>(false);

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.loadBooks();
    }

    loadBooks() {
        this.loading.set(true);
        this.bookService.getAllBooks().subscribe({
            next: (data) => {
                console.log('📚 Books loaded from API:', data);
                console.log('📖 First book:', data[0]);
                console.log('💰 First book price:', data[0]?.giaBan);
                console.log('📝 First book name:', data[0]?.tenSach);
                this.books.set(data);
                this.loading.set(false);
            },
            error: (error) => {
                console.error('Error loading books:', error);
                this.loading.set(false);
                this.displayToast('❌ Lỗi khi tải danh sách sách');
            }
        });
    }

    onCreateNew() {
        this.formMode.set('create');
        this.selectedBook.set(null);
        this.currentView.set('form');
    }

    onEdit(book: Book) {
        this.formMode.set('edit');
        this.selectedBook.set(book);
        this.currentView.set('form');
    }

    onViewDetails(book: Book) {
        this.selectedBook.set(book);
        this.currentView.set('details');
    }

    onDeleteRequest(book: Book) {
        this.bookToDelete.set(book);
        this.showDeleteConfirm.set(true);
    }

    onDeleteConfirm() {
        const book = this.bookToDelete();
        console.log('🗑️ Delete confirm called');

        if (!book) {
            console.error('❌ No book selected for deletion');
            this.showDeleteConfirm.set(false);
            return;
        }

        console.log('📚 Book to delete:', book);
        // Ensure ID is a number
        const bookId = Number(book.id);
        console.log('🔖 Book ID (parsed):', bookId);

        if (bookId) {
            console.log('🗑️ Calling delete API for book ID:', bookId);
            this.bookService.deleteBook(bookId).subscribe({
                next: (response) => {
                    console.log('✅ Delete successful:', response);
                    this.displayToast(`✅ Đã xóa "${book.tenSach}" thành công`);

                    // Close modal first
                    this.showDeleteConfirm.set(false);
                    this.bookToDelete.set(null);

                    // Then reload list
                    this.loadBooks();
                },
                error: (error) => {
                    console.error('❌ Error deleting book:', error);
                    this.displayToast('❌ Lỗi khi xóa sách. Vui lòng thử lại.');
                }
            }).add(() => {
                // Finalize: always close modal and clean up
                console.log('🏁 Delete operation finalized');
                this.showDeleteConfirm.set(false);
                this.bookToDelete.set(null);
                this.loading.set(false);
            });
        } else {
            console.error('❌ Cannot delete: Invalid book ID:', book.id);
            this.displayToast('⚠️ Sách lỗi (không có ID). Đang làm mới danh sách...');

            // Force close modal even on error
            this.showDeleteConfirm.set(false);
            this.bookToDelete.set(null);
            this.loadBooks();
        }
    }

    onDeleteCancel() {
        this.showDeleteConfirm.set(false);
        this.bookToDelete.set(null);
    }

    onFormSubmit(book: Book) {
        console.log('🔄 onFormSubmit called');
        console.log('📝 Form mode:', this.formMode());
        console.log('📚 Received book data:', book);
        console.log('🔖 Selected book:', this.selectedBook());

        if (this.formMode() === 'create') {
            console.log('➕ Creating new book...');
            this.bookService.createBook(book).subscribe({
                next: () => {
                    this.displayToast('✅ Tạo mới sách thành công');
                    this.loadBooks();
                    this.currentView.set('list');
                },
                error: (error) => {
                    console.error('❌ Error creating book:', error);
                    this.displayToast('❌ Lỗi khi tạo sách');
                }
            });
        } else {
            const bookId = this.selectedBook()?.id;
            console.log('✏️ Updating book with ID:', bookId);
            if (bookId) {
                // Ensure the ID is included in the update
                const bookWithId = { ...book, id: bookId };
                console.log('📤 Sending update with data:', bookWithId);
                this.bookService.updateBook(bookId, bookWithId).subscribe({
                    next: (response) => {
                        console.log('✅ Update successful:', response);
                        this.displayToast('✅ Cập nhật sách thành công');
                        this.loadBooks();
                        this.currentView.set('list');
                    },
                    error: (error) => {
                        console.error('❌ Error updating book:', error);
                        this.displayToast('❌ Lỗi khi cập nhật sách');
                    }
                });
            } else {
                console.error('❌ No book ID found for update');
            }
        }
    }

    onFormCancel() {
        this.currentView.set('list');
        this.selectedBook.set(null);
    }

    onDetailsClose() {
        this.currentView.set('list');
        this.selectedBook.set(null);
    }

    displayToast(message: string) {
        this.toastMessage.set(message);
        this.showToast.set(true);
        setTimeout(() => {
            this.showToast.set(false);
        }, 3000);
    }
}