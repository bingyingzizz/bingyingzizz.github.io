# 复偏导数的定义 $\implies$ 运算法则
`imp.complex-partial-rules` · 推出 · strong 边 · 根 `../`

`def.complex-partial` 复偏导数 → `prop.complex-partial-rules` 复偏导数的运算法则

又 $\Delta w = f_z \Delta z + f_{\bar z}\overline{\Delta z} + o(\Delta z)$，取共轭得 $\overline{\Delta w} = \overline{f_z}\,\overline{\Delta z} + \overline{f_{\bar z}}\,\Delta z + o(\Delta z)$。代回去，按 $\Delta z$ 与 $\overline{\Delta z}$ 归并：

$$\Delta (g \circ f) = \left( g_w f_z + g_{\bar w}\overline{f_{\bar z}} \right)\Delta z + \left( g_w f_{\bar z} + g_{\bar w}\overline{f_z} \right)\overline{\Delta z} + o(\Delta z).$$

按「系数唯一」（取 $\Delta z = t$ 与 $\Delta z = it$ 两次）读出 $\Delta z$ 的系数，即得 (5)。注意共轭把 $f_z$ 与 $f_{\bar z}$ **互换**了位置 —— 这就是第二项长得「别扭」的原因。$\blacksquare$
