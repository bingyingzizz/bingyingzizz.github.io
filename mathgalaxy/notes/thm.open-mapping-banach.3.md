# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　说明
根 `../`

**第三步：收尾。** 任取开集 $\Omega \subseteq E$ 与 $x \in \Omega$，取 $\rho > 0$ 使 $B(x, \rho) \subseteq \Omega$。由齐次性 $u(B(x,\rho)) = u(x) + \rho\, u(B_E) \supseteq u(x) + \rho r B_F$，这是 $u(x)$ 的一个邻域，含于 $u(\Omega)$。故 $u(\Omega)$ 开。$\square$

**两条假设各管什么。** $F$ 完备只用在第一步（要纲定理）；$E$ 完备只用在第二步（要级数收敛）。两个缺一不可：$E$ 不完备时恒等映射 $(C[0,1], \|\cdot\|_\infty) \to (C[0,1], \|\cdot\|_1)$ 是连续双射但不开；$F$ 不完备的反例见闭图像定理那一条的注。

**与闭图像定理的关系。** 第二步的「完备性去掉闭包」是这条定理真正的技术核心；闭图像定理反过来把它当工具用（先证 $\pi_1^{-1}$ 有界，再用它得到 $u$ 有界）。所以这两条不是彼此独立的：**开映射 $\implies$ 逆算子 $\implies$ 闭图像**。
