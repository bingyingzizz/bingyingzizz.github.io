# 平坦与挠积消失　`prop.tor-flat-vanishing`　·　说明
根 `../`

- (1) $\iff$ (2)：**要用一次长正合列**（平坦 = $(-)\otimes F$ 正合；它与「$\operatorname{Tor}_{1}$ 恒消失」的等价由 $\operatorname{Tor}$ 的长正合列给出，不是纯定义展开）。
- (2) $\implies$ (3)：**这一步要用“维数偏移”**：若 $\operatorname{Tor}_{1}(F, N) = 0$ 对一切 $N$，则取 $N$ 的短正合列，用长正合列归纳得 $\operatorname{Tor}_{n} = 0$。⚠️ 需要「长正合列」这一工具（`thm.long-exact` 的 Tor 版本）。
- (3) $\implies$ (2)：**特例**（$n = 1$）。

> 续见 notes/prop.tor-flat-vanishing.3.md
