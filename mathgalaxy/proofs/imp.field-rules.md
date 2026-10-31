# 环公理 $\implies$ 基本等式
`imp.field-rules` · 推出 · strong 边 · 根 `../`

`def.ring` 环 → `prop.field-rules` 环与域的基本等式

**(i)** $0 \cdot a = (0 + 0)\cdot a = 0 \cdot a + 0 \cdot a$。两边加上 $-(0 \cdot a)$ 得 $0 = 0 \cdot a$；$a \cdot 0 = 0$ 同理。

**(ii)** $(-a)b + ab = ((-a) + a)b = 0 \cdot b = 0$，故 $(-a)b = -(ab)$（加法逆元唯一）。同理 $a(-b) = -(ab)$。再用一次：

$$(-a)(-b) = -\bigl(a(-b)\bigr) = -\bigl(-(ab)\bigr) = ab.$$

**(iii)** $(-1)a = -(1 \cdot a) = -a$（用 (ii) 与幺元）。

**(iv)** 若 $ab = ac$，则 $a(b - c) = ab - ac = 0$。若 $a \ne 0$ 且 $A$ 无零因子，则 $b - c = 0$，即 $b = c$。$ab = 0$ 的断言就是无零因子的定义。$\blacksquare$
