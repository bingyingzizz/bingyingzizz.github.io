# imp.injective-criterion
`imp.injective-criterion` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.projective-object` 投射 / 内射对象 + `def.mono` 单态射 / 满态射 / 同构 + `def.adjoint` 伴随函子 + `thm.snake-lemma` 蛇引理 + `def.fibered-product` 纤维积 / 纤维余积 → `prop.injective-criterion` 内射对象的判据

- (1) $\iff$ (3)：**几乎只是定义改写**。$\operatorname{Hom}(-,I)$ 正合 $\iff$ 它把单态射送到满射（其余两个正合性对 $\operatorname{Hom}$ 是自动的，因为它是左正合的）。这一跳**不需要范畴有足够多内射**。
- (1) $\implies$ (2)：**一行**：给单态射 $\iota : I \rightarrowtail M$，由内射性存在 $r : M \to I$ 使 $r\iota = \mathrm{id}_{I}$ —— 这就是收缩。
- (2) $\implies$ (1)：**这一步要用 Baer 判别法的“提升”论证**：给单态射 $M' \rightarrowtail M$ 与 $f : M' \to I$，考虑推出图，把 $f$ 拉成 $I \rightarrowtail P$ 再取收缩，得到 $M \to I$ 使图交换。**这是四条里唯一有实质劳动的一

> 续见 proofs/imp.injective-criterion.3.md
