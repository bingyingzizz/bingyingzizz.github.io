# imp.precanonical-preserves
`imp.precanonical-preserves` · 推出 · strong 边 · 根 `../`

`def.precanonical-topology` 预标准拓扑 + `def.sheaf` 层 + `def.topos` 拓扑斯 → `prop.precanonical-preserves` 余积与商在层范畴中不变

证明一句话：对任意层 $F$，由 $F$ 是层（上一条的乘积等式）得 $\operatorname{Hom}(X \coprod Y, F) = F(X \coprod Y) \cong F(X) \times F(Y) = \operatorname{Hom}(X, F) \times \operatorname{Hom}(Y, F) = \operatorname{Hom}(X \coprod Y, F)$，所以层范畴里这个余积的泛性质原样成立。

商的情形是把正合列 $F(X/R) \to F(X) \rightrightarrows F(R)$ 读成 $\operatorname{Hom}(X/R, F) \cong \ker\bigl(\operatorname{Hom}(X, F) \rightrightarrows \operatorname{Hom}(R, F)\bigr)$。

∎
