# 可展曲面　`def.developable-surface`　·　说明
根 `../`

**为什么「纸能卷不能拉」就是 $K \equiv 0$**：纸不可拉伸 $\implies$ 弯曲时第一基本形式不变 $\implies$ 等距；由 **Gauss 绝妙定理**（`thm.theorema-egregium`）$K$ 只依赖第一基本形式 $\implies$ $K$ 不变。平面 $K = 0$，所以纸弯成的曲面必须 $K = 0$；反过来 $K = 0$ 也能摊平（这就是「可展」名字的来历）。

⭐ **三类从哪来**：把直纹面写成 $X = a(u) + v\,b(u)$，「切平面沿母线不变」等价于 $\det(a', b, b') = 0$。于是 $b' = 0$ 得柱面；**存在定点 $q$ 与函数 $\lambda$ 使 $a = q + \lambda b$**（母线全过 $q$）得锥面 —— 注意这**不是**「$a' \parallel b$」：圆锥 $a = b = (\cos u, \sin u, 1)$ 时 $a' = b'$ 与 $b$ 并不平行；其余得切线面。⚠️ 这是**局部**分类，全局还有拼接与自交问题。

> 续见 notes/def.developable-surface.2.md
