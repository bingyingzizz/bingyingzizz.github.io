# 不交万有余积与次标准拓扑　`prop.disjoint-universal`　·　说明
根 `../`

**证明。** 记次标准拓扑下的层化为 $(-)^{\sharp}$，此时可表示预层都是层：$h_{X}^{\sharp} = h_{X}$。
**$(\implies)$** 设 $X = \coprod_{i}X_{i}$ 在 $\mathcal{C}$ 里不交、万有。Yoneda 嵌入保余积，故 $h_{X} \cong \coprod_{i}h_{X_{i}}$，两边都是层，即这个余积在层范畴里就被算出来了 ✓。不交：层范畴的余积逐点算，$\coprod_{i}h_{X_{i}}$ 的注入都来自 $\mathcal{C}$ 里的注入，两两拉回是 $h_{0}$（始对象）✓。万有：沿任意 $Z \to h_{X}$ 的拉回逐点验，落在 $\mathcal{C}$ 里就是原来的万有性 ✓。
**$(\Longleftarrow)$** 设某个次标准拓扑下 $h_{X} = \coprod_{i}h_{X_{i}}$ 不交、万有。逐点（对每个 $Z \in \mathcal{C}$）展开：不交给 $\operatorname{Hom}(Z,X) = \coprod_{i}\operatorname{Hom}(Z,X_{i})$ 的不交并；万有给「沿 $Z' \to Z$ 拉回保持它」。取 $Z = X$ 与 $1_{X}$ 读出 $X_{i}\to X$ 的注入性，取 $Z = X_{i}\times_{X}X_{j}$ 读出两两拉回是始对象，再取任意 $Z$ 得万有性，逐条搬回 $\mathcal{C}$ ✓

> 续见 notes/prop.disjoint-universal.2.md
