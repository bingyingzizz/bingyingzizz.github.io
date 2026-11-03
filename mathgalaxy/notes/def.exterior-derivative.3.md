# 外微分（欧氏开集）　`def.exterior-derivative`　·　说明
根 `../`

- **$\mathbb{R}$-线性**与**分次 Leibniz 律**：**只确定 $\mathrm{d}$ 在基上的作用**。真正把它钉死的是「$\mathrm{d}(\mathrm{d}x^{j}) = 0$」这一条约定 —— 有了它，$\mathrm{d}$ 在 $\mathrm{d}x^{I}$ 上就完全由 Leibniz 律决定。
- **$\mathrm{d}^{2} = 0$**：**这是全部内容的所在**，等价于**偏导可交换**（$\partial_{j}\partial_{k} = \partial_{k}\partial_{j}$，Clairaut 定理）。⚠️ 所以「外微分」在 $C^{2}$ 类上才成立：$C^{1}$ 但二阶不可交换的函数会破坏它。
- **与 Lie 导数的关系** $\mathrm{d} = $「反对称化」：Cartan 公式 $\mathcal{L}_{X} = \mathrm{d}\iota_{X} + \iota_{X}\mathrm{d}$ 把这三种运算焊在一起（`thm.cartan-formula`）。

> 续见 notes/def.exterior-derivative.4.md
