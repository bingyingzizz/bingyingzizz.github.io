# 全变差的基本性质　`prop.total-variation-basics`　·　说明
根 `../`

(b) 的证法：先取 $\rho = |\nu_1| + |\nu_2|$ 把 $\nu$ 的两个不同表示拉到一个共同的「基准测度」上，再用 Radon–Nikodym 与链式法则把两个密度都换到 $\rho$ 上。于是要证的就是



$$|f_1| \frac{d\mu_1}{d\rho} = |f_2| \frac{d\mu_2}{d\rho}\quad  \rho-\text{a.e.}$$



从而 $|f_1| d\mu_1 = |f_2| d\mu_2$ —— 说明全变差的密度与「用哪个 $\mu$ 表示 $\nu$」无关。

由此也得到一个实用的直觉：**全变差就是「把质量取绝对值之后再测一遍」**。
