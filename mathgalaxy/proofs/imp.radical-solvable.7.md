# imp.radical-solvable
`imp.radical-solvable` · 推出 · strong 边 · 根 `../`

`thm.galois-correspondence` 伽罗瓦基本定理 + `def.solvable-group` 可解群 + `prop.sn-solvable` 对称群的可解性 + `def.galois-extension` 伽罗瓦扩张 + `def.roots-of-unity` 单位根 + `thm.cayley-hamilton` Cayley–Hamilton 定理 → `thm.radical-solvable` 根式可解 与 伽罗瓦群可解

**去掉单位根假设**：一般 $F$ 未必含 $\zeta_{n}$。取 $N$ 为 $1,2,\ldots,n$ 的公倍数（例如 $n!$），令 $F_{1}=F(\zeta_{N})$、$K_{1}=K(\zeta_{N})$。$K_{1}/F_{1}$ 伽罗瓦，限制映射 $\operatorname{Gal}(K_{1}/F_{1})\to\operatorname{Gal}(K/F)$ 是单射，故 $G_{1}=\operatorname{Gal}(K_{1}/F_{1})$ 可解且 $|G_{1}|\le n$。$F_{1}$ 含所有次数 $\le n$ 的单位根，特别是 $\zeta_{|G_{1}|}$；上面已证的情形给出 $K_{1}$ 在 $F_{1}$ 上的根式塔。又 $F\subseteq F_{1}=F(\zeta_{N})$ 本身是一步根式扩张（$\zeta_{N}^{N}=1\in F$）。两段接起来，$K\subse

> 续见 proofs/imp.radical-solvable.8.md
