# 上同调就是 Ext　`prop.cohomology-as-ext`　·　说明
根 `../`

**证明。** 关键在于这两个函子**本来是同一个函子**。由 $\mathbb{Z}\cdot X$ 的泛性质（它是自由对象：$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot X, M) = \operatorname{Hom}(X, M)$）✓，
$$\operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X,\ M\bigr) \;=\; \operatorname{Hom}_{\mathcal{T}}\bigl(X,\ M\bigr) \;=\; \Gamma(X, M) = M(X) ✓$$
即「取截面」函子与「$\operatorname{Hom}(\mathbb{Z}\cdot X, -)$」逐字相同 ✓。右导出函子只依赖函子本身，故两者的右导出函子在导出范畴里同构：$\operatorname{R}\Gamma(X, -) \cong \operatorname{RHom}(\mathbb{Z}\cdot X, -)$ ✓；逐类取上同调就得到第二个同构 ✓。∎

⭐ 这条是**两套语言之间的桥**：一边是几何味的「截面」（$\Gamma(X,-)$），一边是代数味的「导出 Hom」。有了它，层上同调的一切计算都能翻译成导出范畴里的 Ext 计算 —— 反过来，Ext 的几何意义也清楚了：**它就是某个空间上的上同调**。

> 续见 notes/prop.cohomology-as-ext.2.md
