# Grothendieck 谱序列　`cor.grothendieck-spectral`　·　说明
根 `../`

**证明（双复形 + 两个谱序列）。** 取 $M$ 的内射消解 $I^{\bullet}$，令 $A^{\bullet} := F I^{\bullet}$。
- 由假设，$I^{n}$ 内射，故 $FI^{n}$ 是 $G$-零调的，所以 $A^{\bullet}$ 是 $FM$ 的一个**由 $G$-零调对象组成的**右消解，于是 $R(G\circ F)M = G A^{\bullet}$ 在导出范畴里（Leray 零调性），即 $R^{n}(G\circ F)M = H^{n}(GA^{\bullet})$；
- 再对 $A^{\bullet}$ 取 **Cartan–Eilenberg 分解** $J^{\bullet,\bullet}$（每个 $J^{p,\bullet}$ 是 $A^{p}$ 的 $G$-零调消解，横竖两方向的同调都算得出来）；
- 双复形的两个谱序列：按 $p$ 先过滤收敛到 $H^{p+q}(G J^{\bullet,\bullet}) = R^{p+q}(G\circ F)M$，而它的 $E_{2}$ 页是「先竖后横」算出来的 $R^{p}G\bigl(H^{q}(A^{\bullet})\bigr) = R^{p}G\bigl(R^{q}FM\bigr)$；另一个谱序列（先横后竖）因为每列都是零调消解而在 $E_{2}$ 页退化，两边收敛到同一个东西。∎
细节在前两条里：Cartan–Eilenberg 分解的存在性，双复形谱序列的收敛与 $E_{2}$ 页的识别。

> 续见 notes/cor.grothendieck-spectral.3.md
