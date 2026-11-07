# 伽罗瓦基本定理　`thm.galois-correspondence`　·　说明
根 `../`

**回到定理**。先说明 $K^{G}=F$：$K/F$ 正规且可分，若 $\alpha\notin F$，其极小多项式在 $K$ 中分裂且有另一个根 $\beta\ne\alpha$（可分性保证无重根、正规性保证其它根都在 $K$），$F$-嵌入 $\alpha\mapsto\beta$ 由正规性延拓为 $K$ 的自同构，它移动 $\alpha$。故固定域恰为 $F$，引理 3 给出 $[K:F] = |G|.$ 对中间域 $E$，$K/E$ 仍有限伽罗瓦（正规、可分都继承），故 $|\operatorname{Gal}(K/E)|=[K:E]$。

**反序双射**。记 $\Phi(E)=\operatorname{Gal}(K/E)$。反序显然：$E_{1}\subseteq E_{2}$ 时，固定 $E_{2}$ 的自同构也固定 $E_{1}$。单射：若 $\Phi(E_{1})=\Phi(E_{2})=H$，把引理 3 用于 $K$ 与 $H$ 得 $[K:K^{H}]=|H|$；而 $[K:E_{i}]=|\Phi(E_{i})|=|H|$，且 $E_{i}\subseteq K^{H}$，次数相等故 $E_{i}=K^{H}$，于是 $E_{1}=E_{2}$。满射：任给子群 $H\le G$，令 $E=K^{H}$；引理 3 给 $[K:E]=|H|$，而 $H\subseteq\operatorname{Gal}(K/E)$ 且 $|\operatorname{Gal}(K/E)|=[K:E]=|H|$，故 $H=\operatorname{Gal}(K/E)=\Phi(E)$。

> 续见 notes/thm.galois-correspondence.6.md
