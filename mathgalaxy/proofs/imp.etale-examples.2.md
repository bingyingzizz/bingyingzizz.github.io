# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

所以 étale 层必须满足 Zariski 层的粘合条件 —— 即**是 Zariski 层**。

**反例方向（为何反之不然）**：étale 覆盖可以有非开浸入的成员（如 $\operatorname{Spec}\mathbb{C} \to \operatorname{Spec}\mathbb{R}$），于是粘合系统更长、条件更严；

满足 Zariski 粘合的预层未必满足这些更长的系统。

故「étale 层 $\to$ Zariski 层」不是等价。

∎

**② 有限 étale 覆叠给出层。** 设 $Y \to X$ 有限 étale，令 $\mathcal{G}_{Y}(U) := \operatorname{Hom}_{X}(U, Y)$。

> 续见 proofs/imp.etale-examples.3.md
