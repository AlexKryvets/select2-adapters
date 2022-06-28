import {Options} from 'select2';

export declare type QueryCallback = (params: {results: any[]}) => void;

interface DataAdapter {
    query(params: any, callback: QueryCallback): void;
}

declare abstract class BaseAdapter implements DataAdapter {
    options: Options;
    abstract query(params: any, callback: QueryCallback): void;
    constructor($element: any, options: Options);
}

export declare class SelectAdapter extends BaseAdapter {
    container: any;
    $element: any;
    query(params: any, callback: QueryCallback): void;
    option(data: any): any;
    addOptions(data: any): any;
}

export declare class ArrayAdapter extends SelectAdapter {
}
