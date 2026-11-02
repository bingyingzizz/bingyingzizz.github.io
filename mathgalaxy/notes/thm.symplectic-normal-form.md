# 辛标准形定理　`thm.symplectic-normal-form`　·　说明
根 `../`

**证明骨架**：取 $e_{1} \ne 0$，由非退化性存在 $f_{1}$ 使 $\omega(e_{1}, f_{1}) = 1$；则 $\operatorname{span}(e_{1}, f_{1})$ 是一块非退化辛平面，且 $V = \operatorname{span}(e_{1},f_{1}) \oplus \operatorname{span}(e_{1},f_{1})^{\perp}$（正交补仍是辛空间）。

对维数归纳即可。

**维数必偶**是这条归纳的副产物。

⭐ **为什么比对称型简单**：对称型要化成对角形，得处理「同一个数能不能开平方」的问题（所以 $\mathbb{R}$ 上分正负、$\mathbb{C}$ 上只剩秩）；交错型的标准形 $J_{0}$ 里只有 $0$ 和 $\pm 1$，**没有待开方的系数**。这就是「辛几何在任意域（char$\ne$2）上都长一样」的原因。

⚠️ **奇数维时只有退化交错型**：比如 $\mathbb{R}^{3}$ 上取 $\omega$ 的秩必为偶数，所以要么退化、要么为零。这与「$\mathbb{R}^{3}$ 上内积很多」形成鲜明对照。

> 续见 notes/thm.symplectic-normal-form.2.md
