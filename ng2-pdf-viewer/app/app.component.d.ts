import { PdfViewerComponent } from "../pdf-viewer/pdf-viewer.component";
export declare class AppComponent {
    pdfViewer: PdfViewerComponent;
    pdfSrc: string;
    page: number;
    rotation: number;
    zoom: number;
    originalSize: boolean;
    showAll: boolean;
    pdf: any;
    constructor();
    ngOnInit(): void;
    incrementPage(amount: number): void;
    incrementZoom(amount: number): void;
    rotate(angle: number): void;
    onFileSelected(): void;
    afterLoadComplete(pdf: any): void;
    stylePageContent: any;
    updateStylePageContent(): void;
    onPageResize(): void;
}
