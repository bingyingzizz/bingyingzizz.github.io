# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

- **唯一性**：$\{U_{i} \to U\}$ 联合满射（集合层上的满射），故 $|U| = \bigcup |U_{i}|$，$f$ 的取值被各 $f_{i}$ 完全钉住 —— 至多一个。
- **存在性**：$Y \to X$ 是 étale，故 $Y$ 在 étale 拓扑下由 $X$ 上可表的层（$h_{Y}$）；而可表预层在 Grothendieck 拓扑下**总是层**（态射的下降对可表函子成立）。把这条用在族 $\{U_{i}\to U\}$ 上，双重纤维积上的一致条件恰好是下降数据，于是给出 $f : U \to Y$。

（这一步正是 $\mathcal{G}_{Y}$ 与常值层的类比所在：$Y = \coprod_{n} X$ 时 $\mathcal{G}_{Y}(U)$ 就是「$n$ 个分支的选取」，即常值层。）∎

> 续见 proofs/imp.etale-examples.6.md
