import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  standalone: false,
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent {
  products=[{"id":"p1","name":"Coca","price":15,"image":"https://vn.images.search.yahoo.com/images/view;_ylt=AwrPrts6dHFpKE4fNjhtUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzk0MjY4MjUzY2Q4YjE1MDExYmI1ZmM5NDgyOGEzZTNhBGdwb3MDNTEEaXQDYmluZw--?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcoca%26type%3DE210VN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D51&w=1585&h=792&imgurl=blogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEhlQGpG_IoFxCqTej7DQuAnAgk8CBZCSEZGJQZmyhMTbdwhQZprXAPfvw4fXo3W3tGyqC3TXZTLCeVUvX2i5XrM7xvFsw2ypurcZ-rG_h5CLrnMTuYCeQ315z-2NTEVEayHREcwYntl-Qz76jGCcLySOn7HreGFBBQHTR0nSiwTFTt7wzNCMVBSJcqqirkA%2Fs1585%2FHistoria-Empresa-Coca-Cola.jpg&rurl=https%3A%2F%2Fwww.negociosyemprendimiento.org%2F2024%2F03%2Fhistoria-coca-cola.html&size=101KB&p=coca&oid=94268253cd8b15011bb5fc94828a3e3a&fr2=piv-web&fr=mcafee&tt=La+historia+de+Coca-Cola%3A+%C2%BFC%C3%B3mo+se+convirti%C3%B3+en+una+de+las+empresas+m%C3%A1s+...&b=0&ni=21&no=51&ts=&tab=organic&sigr=z22mcFomy8CW&sigb=TNOTWqmZQRPA&sigi=_sy2z7AOObOt&sigt=C1mavchW10L2&.crumb=ackl9BSAuCa&fr=mcafee&fr2=piv-web&type=E210VN714G0"}
  ,{"id":"p2","name":"Pepsi","price":20,"image":"https://vn.images.search.yahoo.com/images/view;_ylt=AwrPrtuidHFpmYsfWwltUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2EzZmNiMDJkM2FjNjE1ZGI3YTQ2NTU1ODhkYWQ1YzM5BGdwb3MDMTE0BGl0A2Jpbmc-?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dpepsi%26ei%3DUTF-8%26type%3DE210VN714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26nost%3D1%26tab%3Dorganic%26ri%3D114&w=1920&h=1032&imgurl=media.telemundo47.com%2F2023%2F02%2Ftlmd-pepsi-peeps.jpg%3Fquality%3D85%26strip%3Dall&rurl=https%3A%2F%2Fwww.telemundowashingtondc.com%2Fnoticias%2Feeuu%2Fpepsi-presentara-nuevo-logo-identidad-visual%2F2190307%2F&size=521KB&p=pepsi&oid=a3fcb02d3ac615db7a4655588dad5c39&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Estados+Unidos%3A+Pepsi+renueva+su+logo+de+bebida+%E2%80%93+Telemundo+Washington+...&b=61&ni=200&no=114&ts=&tab=organic&sigr=UUXkuIjpU655&sigb=zKRcLqD8QYrk&sigi=nUQhePXVsQOl&sigt=QcpymT4BSMTt&.crumb=ackl9BSAuCa&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210VN714G0"}
  ,{"id":"p3","name":"Sting","price":25,"image":"https://vn.images.search.yahoo.com/images/view;_ylt=AwrPrtv1dHFppRMf6IptUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzdiMmM5MDdlODM0M2E4YTZmZWRlOTVlN2RiYTJjMzU2BGdwb3MDMTE1BGl0A2Jpbmc-?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsting%2Bd%25C3%25A2u%26ei%3DUTF-8%26type%3DE210VN714G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26nost%3D1%26tab%3Dorganic%26ri%3D115&w=1024&h=1024&imgurl=down-vn.img.susercontent.com%2Ffile%2Fsg-11134201-7rd4w-lvfurzkoe9lp0b&rurl=https%3A%2F%2Fshopee.vn%2FN%25C6%25B0%25E1%25BB%259Bc-T%25C4%2583ng-L%25E1%25BB%25B1c-Sting-D%25C3%25A2u-Lon-320ml-i.962945663.27200297803&size=87KB&p=sting+d%C3%A2u&oid=7b2c907e8343a8a6fede95e7dba2c356&fr2=sa-gp-search&fr=mcafee&tt=N%C6%B0%E1%BB%9Bc+T%C4%83ng+L%E1%BB%B1c+Sting+D%C3%A2u+Lon+320ml+%7C+Shopee+Vi%E1%BB%87t+Nam&b=61&ni=200&no=115&ts=&tab=organic&sigr=xPFNdJgLFBSi&sigb=Dbc3Sn2QV92Z&sigi=jLsxI6ArpwxG&sigt=pFYKqv9eBr1n&.crumb=ackl9BSAuCa&fr=mcafee&fr2=sa-gp-search&type=E210VN714G0"}
  ,{"id":"p4","name":"Lavie","price":-5,"image":"https://vn.images.search.yahoo.com/images/view;_ylt=AwrKBPnDjnFpmXMdgydtUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQxZDE3N2U1YTNiZmM2NGQ0ZTBiOGNhY2JhOGVjYjYyBGdwb3MDOARpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlavie%26ei%3DUTF-8%26type%3DE210VN714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D8&w=600&h=600&imgurl=truongphatdat.com%2Fwp-content%2Fuploads%2F2017%2F06%2Flavie-1500ml.png&rurl=https%3A%2F%2Ftruongphatdat.com%2Fdanh-muc%2Fnuoc-lavie%2F&size=179KB&p=lavie&oid=41d177e5a3bfc64d4e0b8cacba8ecb62&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=N%C6%B0%E1%BB%9Bc+LaVie&b=0&ni=200&no=8&ts=&tab=organic&sigr=oothMMWRumuC&sigb=pqz9r2iFwNOU&sigi=4CD.XjSFhgMS&sigt=lWtXPFcoQjPj&.crumb=ackl9BSAuCa&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210VN714G0"}
  ,{"id":"p5","name":"Aqua","price":-10,"image":"https://vn.images.search.yahoo.com/images/view;_ylt=AwrPrtsHj3FplrEifihtUwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgyMmFhOTA0ZjU0ZDE2YzEyMWJiMTMwMDFhNGU3YTY1BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fvn.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Daquafina%26ei%3DUTF-8%26type%3DE210VN714G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26tab%3Dorganic%26ri%3D2&w=2000&h=1320&imgurl=ionlifevn.com%2Fwp-content%2Fuploads%2FN%25C6%25B0%25E1%25BB%259Bc-Aquafina.jpg&rurl=https%3A%2F%2Fionlifevn.com%2Faquafina%2F&size=181KB&p=aquafina&oid=822aa904f54d16c121bb13001a4e7a65&fr2=sa-gp-search&fr=mcafee&tt=N%C6%B0%E1%BB%9Bc+Aquafina+-+N%C6%B0%E1%BB%9Bc+su%E1%BB%91i+Aquafina+-+N%C6%B0%E1%BB%9Bc+tinh+khi%E1%BA%BFt+Aquafina&b=0&ni=192&no=2&ts=&tab=organic&sigr=wksrU7V_6Nrr&sigb=TPedmfhQ6gR3&sigi=JaQ1CV8KBBS8&sigt=Kao3np3yJCVj&.crumb=ackl9BSAuCa&fr=mcafee&fr2=sa-gp-search&type=E210VN714G0"}
]
  selected_id:any
  constructor(private router:Router,private activeRouter:ActivatedRoute)
  {
    //dung router de dieu huong 
    //dung active router de nhan dieu huong
    activeRouter.paramMap.subscribe((param)=>{
      this.selected_id=param.get("id")
    })
  }
  view_detail(pid:string)
  {
    //alert("Ban muon xem chi tiet san pham co ID=" +pid)
    this.router.navigate(["san-pham1",pid])
  }
}
