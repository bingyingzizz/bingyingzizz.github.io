# 唯一分解给出因数公式
`imp.divisor-formula` · 推出 · strong 边 · 根 `../`

`thm.fundamental-arithmetic` 算术基本定理 → `thm.divisor-formula` τ 与 σ 的乘积公式

设 $n = p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}$。由 `thm.fundamental-arithmetic`，这是 $n$ 的分解里唯一的素数幂写法。
任一因数 $d$ 也随之写成 $d = p_{1}^{f_{1}} \cdots p_{r}^{f_{r}}$（同一批素数，指数 $0 \le f_{i} \le e_{i}$），且这种写法唯一。
于是「选因数」等价于「每个指数独立选一个值」，共 $\prod (e_{i}+1)$ 个；$\sigma$ 同理逐素数幂求和。∎

> 公式靠唯一分解：$n$ 的因数与「指数向量」一一对应。
