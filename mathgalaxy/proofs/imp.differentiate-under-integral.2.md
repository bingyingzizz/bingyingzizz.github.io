# DCT $\implies$ 在积分号下求极限与求导
`imp.differentiate-under-integral` · 推出 · strong 边 · 根 `../`

`thm.dct` 控制收敛定理 → `thm.differentiate-under-integral` 交换极限/导数与积分

$$F'(t_0) = \lim_n \int h_n = \int \lim_n h_n = \int \partial f / \partial t(x, t_0) d\mu(x)$$

∎

$>$ ⚠ (b) 里那个「取 sup 的控制」必须提前假定：如果只对**每个** $t$ 假设有控制，是不够的 —— 需要**同一个 $g$** 控制整族偏导数。
