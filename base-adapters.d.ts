import {Options} from 'select2';

interface DataAdapter {
    query(params, callback): void;
}

declare abstract class BaseAdapter implements DataAdapter {
    options: Options;
    abstract query(params, callback): void;
    constructor($element: any, options: Options);
}

export declare class SelectAdapter extends BaseAdapter {
    container: any;
    $element: any;
    query(params, callback): void;
    option(data: any): any;
    addOptions(data: any): any;
}

export declare class ArrayAdapter extends SelectAdapter {
}
