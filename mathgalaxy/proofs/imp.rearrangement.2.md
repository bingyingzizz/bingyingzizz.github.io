# 绝对收敛 $\implies$ 重排不变
`imp.rearrangement` · 推出 · strong 边 · 根 `../`

`def.absolute-convergence` 绝对收敛 + `thm.absolute-implies-convergent` 绝对收敛 ⟹ 收敛 → `thm.rearrangement` 重排不变性

**一般情形。** 写 $a_n = a_n^{+} - a_n^{-}$，其中 $a^{\pm} := \frac{|a_n| \pm a_n}{2} \ge 0$。由 $0 \le a_n^{\pm} \le |a_n|$，两个非负级数都收敛；对它们各用上面的结论，再相减：

$$\sum_n a_{\sigma(n)} = \sum_n a_{\sigma(n)}^{+} - \sum_n a_{\sigma(n)}^{-} = \sum_n a_n^{+} - \sum_n a_n^{-} = \sum_n a_n$$

绝对收敛性同理（$\sum |a_{\sigma(n)}| = \sum |a_n| < \infty$，来自非负情形）。∎

> 第 2 步「对 $\sigma^{-1}$ 再用一次」是关键技巧：非负级数的和定义为上确界，而「有限部分」这个说法对两个方向都成立。
