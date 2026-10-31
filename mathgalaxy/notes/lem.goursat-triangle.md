# Goursat 三角形引理　`lem.goursat-triangle`　·　说明
根 `../`

⭐ 手法是**二分 + 让三角形缩到一点**，不用 Green、不用 $f'$ 连续。

**第一步（四分）**：取三边中点把 $T$ 分成四个小三角形。整条边界的积分等于四条小边界之和（内部那三条边各被走两次、方向相反，抵消），于是至少有一个满足 $|I| \le 4\,|I(T_1)|$。迭代得 $T \supset T^{(1)} \supset T^{(2)} \supset \cdots$，第 $n$ 个的周长是 $L/2^n$，闭集套定理给出公共点 $z^*$，且 $|I| \le 4^n |I(T^{(n)})|$。

**第二步（把 $f$ 换成线性项）**：在 $z^*$ 附近用复可微的定义：$f(z) = f(z^*) + f'(z^*)(z - z^*) + \eta(z)\,(z - z^*)$，其中 $\eta(z) \to 0$（$z \to z^*$）。前两项是多项式，沿任何闭三角形的积分都是 $0$（可直接算）。

**第三步（估计）**：设 $\varepsilon_n = \sup_{z \in T^{(n)}} |\eta(z)| \to 0$，则 $|I(T^{(n)})| \le \varepsilon_n \cdot (L/2^n) \cdot (L/2^n)$，于是 $|I| \le 4^n \cdot \varepsilon_n \cdot L^2/4^n = \varepsilon_n L^2 \to 0$。

> 续见 notes/lem.goursat-triangle.2.md
