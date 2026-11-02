# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

要证：给定 $U_{i}$ 上的态射 $f_{i} : U_{i} \to Y$，若在双重纤维积上一致（即 $f_{i}$ 与 $f_{j}$ 在 $U_{i}\times_{U}U_{j}\to U_{i},U_{j}\to Y$ 上相同），则存在唯一 $f : U \to Y$ 拉回成各 $f_{i}$。

- **唯一性**：$\{U_{i} \to U\}$ 联合满射（集合层上的满射），故 $|U| = \bigcup |U_{i}|$，$f$ 的取值被各 $f_{i}$ 完全钉住 —— 至多一个。
- **存在性**：$Y \to X$ 是 étale，故 $Y$ 在 étale 拓扑下由 $X$ 上可表的层（$h_{Y}$）；而可表预层在 Grothendieck 拓扑下**总是层**（态射的下降对可表函子成立）。

> 续见 proofs/imp.etale-examples.4.md
