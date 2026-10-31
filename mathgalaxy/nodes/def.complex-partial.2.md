# 复偏导数　`def.complex-partial`　·　续页（第 2 页）
[在星图里打开](../#n=def.complex-partial)　·　第 1 页 [nodes/def.complex-partial.md](./def.complex-partial.md)

## 陈述（续）
$$\frac{\partial f}{\partial z} := \frac{1}{2}\left( \frac{\partial f}{\partial x} - i\,\frac{\partial f}{\partial y} \right), \qquad \frac{\partial f}{\partial \bar z} := \frac{1}{2}\left( \frac{\partial f}{\partial x} + i\,\frac{\partial f}{\partial y} \right).$$

在这两个记号下，$f$ 的增量写成
$$f(z_0 + \Delta z) - f(z_0) = \frac{\partial f}{\partial z}(z_0)\,\Delta z + \frac{\partial f}{\partial \bar z}(z_0)\,\overline{\Delta z} + o(\Delta z).$$
两个系数由增量**唯一**决定：若 $A\Delta z + B\overline{\Delta z} = a\Delta z + b\overline{\Delta z} + o(\Delta z)$，分别取 $\Delta z = t$（$t$ 为实数）与 $\Delta z = it$，令 $t \to 0$ 即得 $A = a$、$B = b$。

> 续见 [nodes/def.complex-partial.3.md](./def.complex-partial.3.md)
