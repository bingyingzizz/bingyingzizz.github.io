# 解析环　`def.analytic-ring`　·　说明
根 `../`

**各方向用到的假设**（解析性是对整类复形的导出检验）：
- 解析 $\iff$ 所列所有复形与极端不连通 $S$ 的比较映射为拟同构：这是定义展开，前提已经给定预解析环。
- 典范映射 $A[S]\to\mathcal A[S]$ $\implies$ 反变的导出 Hom 比较映射：用预复合的函子性，不需要先假定解析性。
- 只检验零次普通 Hom $\implies$ 导出比较同构不免费；普通 Hom 看不到高次 Ext，不能替代对复形的条件。
- $\operatorname{RHom}_{\mathcal A}(\mathcal A[S],C)$ 与 $\operatorname{RHom}_A(\mathcal A[S],C)$ 的识别**不需要**完备模导出范畴：$C$ 是 $\mathcal A$-模复形、$\mathcal A[S]$ 自由，两边都典范同构于 $C^{S}$（逐项成立，故导出层面也成立）。所以定义可整体在底层 $A$-模的导出范畴里表述，无循环。
