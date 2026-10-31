# 导出范畴按无穷范畴粘合　`thm.adic-gluing`　·　说明
根 `../`

⚠ **为什么必须上 $\infty$-范畴**：在阿贝尔层面粘不起来 —— 有理开集上的基变换 $-\otimes_{(A,A^+)_\blacksquare} (\mathcal{O}_X(U),\mathcal{O}_X^+(U))_\blacksquare$ 不正合。具体例子：$(A,A^+) = (\mathbb{F}_p[T], \mathbb{F}_p)$，取有理开集「$|T| \le 1$」，此时 $(\mathcal{O}_X(U),\mathcal{O}_X^+(U)) = (\mathbb{F}_p[T], \mathbb{F}_p[T])$，而单射 $\mathbb{F}_p[T] \hookrightarrow \mathbb{F}_p((T^{-1}))$ 在基变换后变成 $\mathbb{F}_p[T] \to 0$。\n\n⭐ 证明思路与概形的 Zariski 下降平行：局部化可交换、局部为零则整体为零；在导出范畴上把这两条做成粘合数据，再升到 $\infty$-范畴（同伦之间的同伦要留住）。\n\n📌 原文 Lectures IX–X（pp. 62–70）。
