# 平行四边形法则　`thm.parallelogram-inner-product`　·　说明
根 `../`

3. **齐次性**。先对 $\lambda \in \mathbb{Q}$：整数由加法性归纳，分母靠 $n\langle x, y\rangle = \langle x, ny\rangle$；再对 $\lambda \in \mathbb{R}$ 取有理数列 $\lambda_n \to \lambda$，用**范数连续**（$\bigl|\|u\| - \|v\|\bigr| \le \|u - v\|$）取极限。复情形额外验一条 $\langle x, iy\rangle = i\langle x,y\rangle$，之后按 $\mathbb{C}$-线性延拓，其余公理随实情形继承。

✓ 至此三条公理齐备；正定性来自 $\langle x,x\rangle = \|x\|^2 \ge 0$，且等号 $\iff x = 0$。

⭐ 经典反例：$\ell^1$、$\ell^\infty$、$C[0,1]$ 都不满足（取不交支撑的 $x, y$ 一看）。所以它们的范数**不是**内积给的 —— 这是「Hilbert 空间为什么特殊」的定量答案。

⚠️ 讲义里写的是「$\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2$」加一句「平行四边行」——把几何里的「平行四边形两条对角线平方和 = 四边平方和」直接搬到了范数上。
