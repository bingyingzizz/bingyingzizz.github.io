# 离散空间上 Z[E] 的 RHom　`prop.rhom-ze-powers`　·　说明
根 `../`

**证明。** 离散空间是不交并 $E = \coprod_{e \in E}\{e\}$，自由对象随之分裂成**直和**
$$\mathbb{Z}[E] = \bigoplus_{e \in E} \mathbb{Z}[*] = \bigoplus_{e \in E} \mathbb{Z} ✓$$
投射对象的任意直和仍投射，故 $\mathbb{Z}[E]$ 投射 ✓，于是 $\operatorname{RHom}(\mathbb{Z}[E], -)$ 集中在 $0$ 次、等于 $\operatorname{Hom}(\mathbb{Z}[E], -)$。而
$$\operatorname{Hom}_{\mathbb{Z}}\Bigl(\bigoplus_{e \in E} \mathbb{Z},\ N\Bigr) \cong \prod_{e \in E} \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z},\ N) \cong \prod_{e \in E} N = N^{E} ✓$$
（Hom 把直和送成积。）∎

**另一条路**：由「离散空间上零调」与截面公式，$\operatorname{Ext}^{n}(\mathbb{Z}\cdot E, N)(S) \cong H^{n}(E \times S, N) = 0$（$n>0$、$S$ Stonean），说明 $N^{E}$ 这个层没有高次，再逐点比较 $0$ 次即得 —— 两条路说的是同一件事。
