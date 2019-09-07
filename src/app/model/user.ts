export type PositionEnum =
    'OMBUDSMAN' /** ผสส **/
    | 'SECRETARY' /** เลขาธิการ **/
    | 'DEPUTY_SECRETARY'  /** รองเลขาธิการ **/
    | 'DEPARTMENT_HEAD' /** ผอ **/
    | 'DIVISION_HEAD' /** หัวหน้า **/
    | 'STAFF' /** พนักงาน **/ ;

export type DepartmentEnum =
    | 'INTAKE'   /** สตร **/
    | 'INVESTIGATION'  /** สส  **/
    | 'INVESTIGATION_1'  /** สส 1 **/
    | 'INVESTIGATION_2'  /** สส 2 **/
    | 'INVESTIGATION_3'  /** สส 3 **/
    | 'INVESTIGATION_4'  /** สส 4 **/
    | 'INVESTIGATION_GOV'  /** สตท **/
    | 'LEGAL' /** กฏหมาย **/;

export type Role = 'ADMIN'

export type Authority = PositionEnum | DepartmentEnum | Role


export class User {
    username: string;
    name: string;
    authorities: Authority[] = [];
    divisionName: string;
    position: string;
}
