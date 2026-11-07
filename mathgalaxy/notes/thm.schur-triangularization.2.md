# Schur 三角化　`thm.schur-triangularization`　·　说明
根 `../`

**归纳**：对 $A_{1}$ 用归纳假设，存在 $(n-1)$ 阶酉矩阵 $V$ 使 $V^{*}A_{1}V = T_{1}$ 为上三角。令 $U_{2} := \operatorname{diag}(1, V)$、$U := U_{1}U_{2}$。$U_{2}$ 酉（分块对角，两块都酉），故 $U$ 酉；把 $U_{2}$ 从左右两侧作用到 $U_{1}^{*}AU_{1}$ 上，左上角 $\lambda$ 不变、右上角变成 $w^{*}V$、左下角仍是 $0$、右下角变成 $V^{*}A_{1}V = T_{1}$ —— 所以 $U^{*}AU$ 是上三角 ✓。

**对角元是特征值**：$U^{*}AU$ 与 $A$ 相似，故特征多项式相同；分块上三角矩阵（左上 $\lambda$、右下 $A_{1}$、左下 $0$）的特征多项式是 $(t - \lambda)\chi_{A_{1}}(t)$，所以 $U^{*}AU$ 的对角元全体作为多重集恰是 $\operatorname{spec}(A)$ —— 其中 $T_{1}$ 的对角元是 $A_{1}$ 的特征值（归纳假设），而 $\operatorname{spec}(A) = \{\lambda\} \cup \operatorname{spec}(A_{1})$。

> 续见 notes/thm.schur-triangularization.3.md
