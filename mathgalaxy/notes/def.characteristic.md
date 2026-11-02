# 域的特征　`def.characteristic`　·　说明
根 `../`

⭐ **为什么必须是素数**：若 $1$ 加 $n$ 次回到 $0$ 而 $n = ab$ 可分解，则 $0 = n\cdot 1 = (a\cdot 1)(b\cdot 1)$，域无零因子 $\implies$ $a \cdot 1 = 0$ 或 $b\cdot 1 = 0$ $\implies$ $n$ 不是最小的。所以核只能是 $(0)$ 或 $(p)$，**不存在特征 $4$ 的域**。

⚠️ **$\operatorname{char}$ 不是「元素个数」**：$\mathbb{F}_{p^{n}}$ 的特征是 $p$，不是 $p^{n}$。特征只记「$\mathbb{Z}$ 怎么映进来」，元数记 $\lvert K\rvert$。两者对有限域由 $\lvert K\rvert = p^{n}$ 联系（$p$ 是特征），但特征本身是那个 $p$。

⚠️ **与 `def.finchar`（有限特征族）无关**：那是序论 / Tukey 引理里的概念（「有限特征族」），只是中文撞了「特征」两个字。名字里带「特征」的东西在图上还有特征值、特征子空间、特征多项式、特征类 —— 各自独立。

> 续见 notes/def.characteristic.2.md
