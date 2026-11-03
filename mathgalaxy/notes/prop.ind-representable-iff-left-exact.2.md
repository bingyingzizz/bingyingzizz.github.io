# ind-可表示即左正合　`prop.ind-representable-iff-left-exact`　·　说明
根 `../`

**各方向用到的假设**（预层方差及有限余极限假设须补齐）：
- (2) $\implies$ (1)：用 Yoneda 稠密性给出 $T=\varinjlim_{h_X\to T}h_X$，滤过性再保证是 ind 表示；反向须用滤过余极限中有限数据可共同实现及共同相等的性质，不是同一句定义。
- (1) $\implies$ (3)：$T:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ 的可表示项保源范畴的极限，再用集合中滤过余极限与有限极限交换；这里指 $\mathcal C^{\mathrm{op}}$ 的有限极限，即 $\mathcal C$ 的有限余极限。
- (3) $\implies$ (2)：通常须 $\mathcal C$ 有有限余极限；初始对象保证元素范畴非空，二元余积给共同上界，余等化子给平行箭头的等化。还须小性或相应宇宙约定来保证表示为小滤过余极限。
- 不能只保已有有限极限就去掉存在性假设：取 $\mathcal C$ 为两个离散对象的范畴，预层在两点都取单点，便保 $\mathcal C^{\mathrm{op}}$ 中已有的有限极限，但元素范畴有两个互不相通的对象而非滤过。
