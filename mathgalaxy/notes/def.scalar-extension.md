# 标量扩张　`def.scalar-extension`　·　说明
根 `../`

**为什么正好是张量积**：$M$ 上只有 $R$-作用，想让它吃 $S$ 的标量，最省的做法就是「把 $S$ 当成新的自由坐标贴上去」—— 这正是 $S \otimes_{R} M$ 在做的事（见 `prop.scalar-extension-adjunction` 的万有性质）。

**三个常见例子**：$\mathbb{R} \to \mathbb{C}$ 给出**复化** $\mathbb{C} \otimes_{\mathbb{R}} V$；$\mathbb{Z} \to \mathbb{Z}[1/n]$ 给出局部化 $M[1/n]$；$R \to R/I$ 给出 $M / I M$。

⭐ 后两个例子说明：**局部化**与**模掉理想**是同一个函子在两类不同 $S$ 下的样子 —— 这是换环观点最划算的地方。

⚠️ $S \otimes_{R} -$ 只**右正合**，一般不正合；它左正合当且仅当 $S$ 是平坦 $R$-模（`def.flat-module`）。几何上「平坦基变换」保纤维的维数，说的就是这条。
