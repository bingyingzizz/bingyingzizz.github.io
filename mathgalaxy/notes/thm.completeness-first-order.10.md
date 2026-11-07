# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

量词情形：先注意对任意闭项 $t$，$\Gamma^{*}\vdash\forall x\,\psi\to\psi(t)$（(Q1) 加分离规则）。($\Leftarrow$) 若 $\forall x\,\psi\in\Gamma^{*}$，则每个实例 $\psi(t)\in\Gamma^{*}$，归纳假设给 $\mathfrak{A}\vDash\psi[\bar t]$ 对所有 $[t]$，故 $\mathfrak{A}\vDash\forall x\,\psi$。($\implies$) 若 $\forall x\,\psi\notin\Gamma^{*}$，则 $\neg\forall x\,\psi\in\Gamma^{*}$；命题逻辑（用 (Q1)）给 $\Gamma^{*}\vdash\exists x\,\neg\psi$，见证性质给 $c$ 使 $\neg\psi(c)\in\Gamma^{*}$，归纳假设给 $\mathfrak{A}\vDash\neg\psi[\bar c]$，故 $\mathfrak{A}\not\vDash\forall x\,\psi$。

> 续见 notes/thm.completeness-first-order.11.md
