# imp.rhom-ze-powers
`imp.rhom-ze-powers` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.condensed-abelian-group` 凝聚态阿贝尔群 → `prop.rhom-ze-powers` 离散空间上自由模的导出 Hom

**证明。** 离散空间是不交并 $E = \coprod_{e \in E}\{e\}$，自由对象随之分裂成**直和**
$$\mathbb{Z}[E] = \bigoplus_{e \in E} \mathbb{Z}[*] = \bigoplus_{e \in E} \mathbb{Z} ✓$$
投射对象的任意直和仍投射，故 $\mathbb{Z}[E]$ 投射 ✓，于是 $\operatorname{RHom}(\mathbb{Z}[E], -)$ 集中在 $0$ 次、等于 $\operatorname{Hom}(\mathbb{Z}[E], -)$。而
$$\operatorname{Hom}_{\mathbb{Z}}\Bigl(\bigoplus_{e \in E} \mathbb{Z},\ N\Bigr) \cong \prod_{e \in E} \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z},\ N) \cong \prod_{e \in E} N = N^{E} ✓$$
（Hom 把直和送成积。）∎
