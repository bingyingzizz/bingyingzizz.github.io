# imp.krull-schmidt
`imp.krull-schmidt` · 推出 · strong 边 · 根 `../`

`lem.iso-factorization` 同构因子引理 + `lem.nilpotent-sum` 幂零自同态之和 + `def.indecomposable-representation` 不可分解表示 + `def.direct-sum-representation` 表示的直和 → `thm.krull-schmidt` Krull–Schmidt 定理

_1$，则 $\alpha=\gamma\circ\beta$；对 $V_1,W_j$ 用 lem.iso-factorization（$\gamma\circ\beta$ 可逆），得 $\beta$ 与 $\gamma$ 都可逆，故 $V_1\cong W_j$。
重排下标使 $j=1$。对 $x\in V$ 令 $w=(e|_{W_1})^{-1}(e(x))\in W_1$；则 $e(x-w)=0$，即 $x-w\in V_2\oplus\cdots\oplus V_k$。故 $V=W_1+(V_2\oplus\cdots\oplus V_k)$；若 $y\in W_1\cap(V_2\oplus\cdots\oplus V_k)$，则 $e(y)=0$，由 $e|_{W_1}$ 可逆得 $y=0$。故 $V=W_1\oplus(V_2\oplus\cdots\oplus V_k)$，从而 $V_2\oplus\cdots\oplus V_k\cong V/W_1\cong W_2\oplus\cdots\oplus W_m$；对 $k-1$ 用归纳假设即得各同构类重数相同。$\blacksquare$
