# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**③ 零调消解算导出函子（完整；只是本图没有单列这条引理）。** 若 $0 \to \mathcal{M} \to \mathcal{A}^{0} \to \mathcal{A}^{1} \to \cdots$ 是消解且每个 $\mathcal{A}^{q}$ 满足 $H^{n}(X,\mathcal{A}^{q})=0$（$n \ge 1$），则 $H^{n}(X,\mathcal{M}) \cong H^{n}(\Gamma(X,\mathcal{A}^{\bullet}))$。证明是维数转移：令 $\mathcal{Z}^{0}=\mathcal{M}$、$\mathcal{Z}^{q+1}=\operatorname{im}(\mathcal{A}^{q} \to \mathcal{A}^{q+1})$，短正合列 $0 \to \mathcal{Z}^{q} \to \mathcal{A}^{q} \to \mathcal{Z}^{q+1} \to 0$ 的长正合列给 $H^{n}(\mathcal{Z}^{q+1}) \cong H^{n+1}(\mathcal{Z}^{q})$（$n \ge 1$）与 $H^{1}(\mathcal{Z}^{q}) \cong \operatorname{coker}(\Gamma(\mathcal{A}^{q}) \to \Gamma(\mathcal{Z}^{q+1}))$，逐层上移即得。本图有 `def.right-derived-functor` 与 `thm.derived-long-exact` 可引 —— 论证是完整的，缺的只是把它单列成引理的节点（与边 `imp.paracompact-cech` 第三步的口径一致）。

> 续见 notes/thm.paracompact-cech-equals-sheaf.8.md
