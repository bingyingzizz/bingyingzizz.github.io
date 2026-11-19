# imp.injective-criterion
`imp.injective-criterion` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.projective-object` 投射 / 内射对象 + `def.mono` 单态射 / 满态射 / 同构 + `def.adjoint` 伴随函子 + `thm.snake-lemma` 蛇引理 + `def.fibered-product` 纤维积 / 纤维余积 → `prop.injective-criterion` 内射对象的判据

**(2) $\implies$ (1)（Baer 判别）**：设 $M'\rightarrowtail M$ 单、$f:M'\to I$。取推出图
$$\begin{array}{ccc} M' & \rightarrowtail & M \\ \downarrow{\scriptstyle f} & & \downarrow \\ I & \rightarrowtail & P \end{array}$$
由单态射的推出仍单得 $I\rightarrowtail P$。由 (2) 取收缩 $r:P\to I$；则 $r\circ(M\to P)$ 延长 $f$（在 $M'$ 上等于 $r\circ f=f$）。故 $I$ 内射。
再由 (1)$\iff$(4) 得「以 $I$ 为左端的短正合列分裂」。∎
