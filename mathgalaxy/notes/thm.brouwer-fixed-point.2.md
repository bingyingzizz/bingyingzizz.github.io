# Brouwer 不动点定理（圆盘）　`thm.brouwer-fixed-point`　·　说明
根 `../`

⭐ **标准口径**：$r \circ \gamma$ 是 $S^{1}$ 上的闭曲线，且 $r$ 把整个圆盘映进 $S^{1}$，故 $r \circ \gamma$ 在 $S^{1}$ 内可缩为常值（同伦 $H(s,t) = r((1-s)\gamma(t))$ 的像始终在 $S^{1}$ 内，而 $S^{1}$ 不是单连通的……）。**这一句需要拓扑输入**，纯复分析的严格版本走的是另一条路：

**改用辐角原理的版本**：若有连续无处为零的 $r : \overline{\mathbb{D}} \to S^{1}$ 且 $r|_{S^{1}} = \mathrm{id}$，则由 `prop.single-valued-branch`（$\mathbb{D}$ 单连通），$r$ 有全纯的对数型提升——但 $r$ 只是连续，不是全纯。所以复分析路线实际证的是**全纯**版本（$f$ 全纯时用 Rouché：$f(z) - z$ 与 $-z$ 在 $|z| = 1$ 上比较，$|f| \le 1 = |{-z}|$，边界上不能有零点，故 $f - z$ 与 $-z$ 在圆盘内零点数相同，即至少一个）。

> 续见 notes/thm.brouwer-fixed-point.3.md
