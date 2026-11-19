# imp.leray-acyclicity
`imp.leray-acyclicity` · 推出 · strong 边 · 根 `../`

`def.f-acyclic` F-零调对象 + `def.right-derived-functor` 右导出函子 + `thm.five-lemma` 五引理 → `prop.leray-acyclicity` Leray 零调性

**证明（截断 + 递推）。** 不妨设 $K^{n} = 0$（$n < 0$）。先设 $K^{\bullet}$ **有界**，记它的「丢掉第 $0$ 项」的截断为 $K'^{\bullet} := (K^{1} \to K^{2} \to \cdots)$，有复形的短正合列
$$0 \to K'^{\bullet} \to K^{\bullet} \to [K^{0}] \to 0 .$$
由「短正合列给出导出三角」，它在 $D(\mathcal{A})$ 里给出三角；把它与 $RF$ 作用后的三角摆在一起（右边用 $R^{n}F$ 的长正合列比较），两列竖直箭头构成三角之间的态射：
$$\begin{array}{ccccccc} FK'^{\bullet} & \to & FK^{\bullet} & \to & FK^{0} & \to & FK'^{\bullet}[1] \\ \downarrow{\scriptstyle \sim} & & \downarrow & & \downarrow{\scriptstyle \sim} & & \downarrow{\scriptstyle \sim} \\ RFK'^{\bullet} & \to & RFK^{\bullet} & \to & RFK^{0} & \to & RFK'^{\bullet}

> 续见 proofs/imp.leray-acyclicity.2.md
