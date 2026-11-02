# 平行四边形法则　`thm.parallelogram-inner-product`　·　说明
根 `../`

「$\implies$」直接展开。「$\Longleftarrow$」用极化恒等式**定义** $\langle x,y\rangle$，再逐条验公理：对实情形，写 $\langle x, y+z\rangle$ 并与 $\langle x,y\rangle + \langle x,z\rangle$ 相减，用平行四边形法则化简得 $0$；齐次性先对有理数成立，再用**连续性**放到实数上（范数连续）；复情形再多验一步 $\langle x, iy\rangle = i\langle x,y\rangle$。

⭐ 经典反例：$\ell^1$、$\ell^\infty$、$C[0,1]$ 都不满足（取不交支撑的 $x, y$ 一看）。所以它们的范数**不是**内积给的 —— 这是「Hilbert 空间为什么特殊」的定量答案。

⚠️ 讲义里写的是「$\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2$」加一句「平行四边行」——把几何里的「平行四边形两条对角线平方和 = 四边平方和」直接搬到了范数上。
