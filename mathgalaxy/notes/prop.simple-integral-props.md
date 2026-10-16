# 简单函数积分的性质　`prop.simple-integral-props`　·　说明
根 `../`

(d) 是这一组里最有用的：它把「对简单函数积分」变成了「一个测度」，于是可数可加性、单调连续性（关于 $A$）全部免费。



⚠ 后面 MCT 的证明正是**靠 (d)**：证明里要断言 $\lim_n \int_{E_n} \varphi = \int \varphi$，用的就是「$A \mapsto \int _A \varphi$ 是测度」加上测度的下连续性（$E_n \uparrow  X$）。

(a) 里 $c > 0$ 而不是 $c \ge 0$：因为约定 $0\cdot \infty = 0$，$c = 0$ 时左边也自动成立，写成 $c > 0$ 只是为了不啰嗦。
