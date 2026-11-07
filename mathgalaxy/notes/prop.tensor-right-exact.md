# 张量函子右正合　`prop.tensor-right-exact`　·　说明
根 `../`

**证明（伴随路线，最快）**：由 `thm.hom-tensor-adjunction-mod`，$(-) \otimes_{R} N \dashv \operatorname{Hom}_{\mathbb{Z}}(N, -)$（值域是 $\mathbf{Ab}$，右伴随取 $\mathbb{Z}$-线性同态）。

左伴随保所有余极限，而余核是两项图的余极限，故 $(-) \otimes N$ 保余核 —— 对加法函子来说「保余核」正是「把短正合列送成 $M_{1} \otimes N \to M \otimes N \to M_{2} \otimes N \to 0$ 正合」✓。

**直接算也行**：$g$ 满蕴含 $g \otimes 1$ 满（每个 $m_{2} \otimes n$ 有原像 $m \otimes n$）；核：由 $\ker g = \operatorname{im} f$，满足 $g(m) = 0$ 的 $m$ 可写 $f(m_{1})$，于是纯张量 $m \otimes n = (f \otimes 1)(m_{1} \otimes n)$，一般元素按双加性拆开即得 $\ker(g \otimes 1) \subseteq \operatorname{im}(f \otimes 1)$；

反向由 $g f = 0$ ✓。

> 续见 notes/prop.tensor-right-exact.2.md
