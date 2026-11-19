# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

**反序双射**。记 $\Phi(E)=\operatorname{Gal}(K/E)$。反序显然：$E_{1}\subseteq E_{2}$ 时，固定 $E_{2}$ 的自同构也固定 $E_{1}$。单射：若 $\Phi(E_{1})=\Phi(E_{2})=H$，把引理 3 用于 $K$ 与 $H$ 得 $[K:K^{H}]=|H|$；而 $[K:E_{i}]=|\Phi(E_{i})|=|H|$，且 $E_{i}\subseteq K^{H}$，次数相等故 $E_{i}=K^{H}$，于是 $E_{1}=E_{2}$。满射：任给子群 $H\le G$，令 $E=K^{H}$；引理 3 给 $[K:E]=|H|$，而 $H\subseteq\operatorname{Gal}(K/E)$ 且 $|\operatorname{Gal}(K/E)|=[K:E]=|H|$，故 $H=\operatorname{Gal}(K/E)=\Phi(E)$。

> 续见 proofs/imp.galois-correspondence.10.md
