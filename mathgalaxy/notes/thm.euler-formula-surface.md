# Euler 公式　`thm.euler-formula-surface`　·　说明
根 `../`

**含义**：两个数 $k_{1}, k_{2}$ 决定所有方向的法曲率 —— 法曲率作为方向的函数只是 $\cos^{2}$ 的插值。

**极值**：$\theta = 0$ 与 $\theta = \pi/2$ 分别给出 $k_{1}, k_{2}$，其余方向夹在两者之间。这解释了「主方向 $=$ 法曲率取极值的方向」，也是$k_{n}(v) = k_{1}\cos^{2}\theta+k_{2}\sin^{2}\theta$。

**矩阵说法**：主方向标架下 $h = \operatorname{diag}(k_{1}, k_{2})$，$V = (\cos\theta, \sin\theta)$，于是 $k_{n} = V^{T}hV$。

**平均曲率的名字**：$H = \frac{1}{2\pi}\int_{0}^{2\pi}k_{n}(\theta)\,\mathrm{d}\theta$ —— 法曲率在整圈上的平均，这正是「平均」二字的来处。
