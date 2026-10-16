# Lebesgue 集 + 可缩条件 $\implies$ 一般族的微分定理
`imp.differentiation-general` · 推出 · strong 边 · 根 `../`

`thm.lebesgue-set-full` Lebesgue 集几乎处处 + `def.shrinks-nicely` 可缩族 → `thm.differentiation-general` 可缩族的微分定理

$$| \frac{1}{m(E_r)} \int_{E_r} f - f(x) | \le \frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy \to 0$$

即得 $\frac{1}{m(E_r)} \int_{E_r} f dy \to f(x)$。∎

> 全部难度都被「把 L_f 的定义写成 $\int|f(y) - f(x)|$」吸收掉了 —— 这也解释了为什么定义要那么写。
