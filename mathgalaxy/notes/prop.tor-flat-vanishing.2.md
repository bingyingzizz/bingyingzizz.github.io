# 平坦与挠积消失　`prop.tor-flat-vanishing`　·　说明
根 `../`

- (1) $\iff$ (2)：**定义展开**（平坦 = $(-)\otimes F$ 正合 = $\operatorname{Tor}_{1}$ 恒消失）。
- (2) $\implies$ (3)：**这一步要用“维数偏移”**：若 $\operatorname{Tor}_{1}(F, N) = 0$ 对一切 $N$，则取 $N$ 的短正合列，用长正合列归纳得 $\operatorname{Tor}_{n} = 0$。⚠️ 需要「长正合列」这一工具（`thm.long-exact` 的 Tor 版本）。
- (3) $\implies$ (2)：**特例**（$n = 1$）。

⚠️ **与“投射”的对照**：投射 $\iff$ $\operatorname{Ext}^{n}(M,-) = 0$ 对所有 $n \ge 1$；平坦 $\iff$ $\operatorname{Tor}_{n}(-,N) = 0$ 对所有 $n \ge 1$。两者形状对称，但**平坦比投射弱**（投射 $\implies$ 平坦，反之不成立；反例：$\mathbb{Q}$ 在 $\mathbb{Z}$ 上平坦但不投射）。
⚠️ $\operatorname{Tor}$ 对**两个变元**都可以算：本节用 $F$ 在左、$N$ 在右；换了顺序结果同构（$\operatorname{Tor}$ 平衡）。

> 续见 notes/prop.tor-flat-vanishing.3.md
