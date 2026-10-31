# 可表函子保所有极限　`prop.representable-preserves-limits`　·　说明
根 `../`

**证明。** 先证 $h^{X} = \operatorname{Hom}(X, -)$ 保极限。取 $D : I \to \mathcal{C}$，链式：

$$\operatorname{Hom}_{\mathcal{C}}\bigl(X,\ \lim D\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}^{I}}\bigl(\underline{\{0\}},\ h^{X} \circ D\bigr) \;\cong\; \lim \bigl(h^{X} \circ D\bigr).$$

第一式是**极限的定义**（$\lim D$ 表示锥函子：$\operatorname{Hom}(\Delta Y, D) \cong \operatorname{Hom}(Y, \lim D)$，取 $Y = X$）；第二式是「函子范畴里的极限逐点算」。这里 $\underline{\{0\}}$ 是取值恒为 $\{0\}$ 的**常函子**（在函子范畴 $\mathcal{C}^{I}$ 里它才是 $\operatorname{Hom}$ 的合法对象）。∎

再由 $F \cong \operatorname{Hom}(X,-)$，同构的函子保的东西一样，$F$ 也保所有极限。

**一批立刻的推论**：

- **反变**可表函子 $\operatorname{Hom}(-, X)$ 把**余极限**变成**极限**（取对偶范畴即得）；
- $\operatorname{Hom}(X, -)$ 保**有限**极限这一点，就是说 $X$ 与一切有限极限「相容」。

> 续见 notes/prop.representable-preserves-limits.2.md
