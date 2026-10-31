# 足够多内射层　`thm.pushforward-enough-injectives`　·　说明
根 `../`

**证明：单性。** 层的映射是单射 $\iff$ 在每个开集上取截面后是单射。取 $U$ 开、$s \in \mathcal{F}(U)$；它在第 $x$ 个分量（$x \in U$ 时）的像是 $s$ 的茎 $s_{x} \in \mathcal{F}_{x} \rightarrowtail I_{x}$（$x \notin U$ 时分量落进 $0$）。若 $s \ne 0$，则存在 $x \in U$ 使 $s_{x} \ne 0$（**层由它的全部茎决定**），于是某个分量非零。故 $\mathcal{F} \to \prod_{x} i_{x,*}I_{x}$ 单。∎

**证明：目标是内射的。** 要 $\operatorname{Hom}_{\mathbf{Ab}(X)}(-, \prod_{x} i_{x,*}I_{x})$ 正合。$\operatorname{Hom}$ 与直积在**第二个**变量上都保极限，所以只需逐 $x$ 检验 $i_{x,*}I_{x}$：由伴随与「$i_{x}^{-1} = $ 取茎」，

$$\operatorname{Hom}_{\mathbf{Ab}(X)}\bigl(\mathcal{F},\ i_{x,*}I_{x}\bigr) \;\cong\; \operatorname{Hom}_{\mathbf{Ab}}\bigl(\mathcal{F}_{x},\ I_{x}\bigr),$$

> 续见 notes/thm.pushforward-enough-injectives.2.md
