# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

正确做法是**变尺寸方块 + 每层预算**：对每个 $\ell$，用边长 $2^{-\ell}$ 的（二进）方块盖住 $C$，只留「极大」的那些（不与更粗一层相交的），这一层的块两两不交、且取 $\ell$ 足够大时 $\lVert Df\rVert$ 在块上小到可控，故总像长 $\le \varepsilon 2^{-\ell}$；于是

$$m\bigl(f(C)\bigr)\le\sum_{\ell\ge\ell_{0}}\varepsilon\,2^{-\ell} = \varepsilon .$$

这才叫「让 $\delta\to0$」：**每层先给预算再求和**，不是把同一层的块一起缩小。

> 续见 proofs/imp.sard.4.md
